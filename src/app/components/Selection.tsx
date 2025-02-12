"use client";

import React, { useEffect, useRef, useState } from "react";
import { SelectionArea, SelectionEvent } from "@viselect/react";
import { Button } from "./button";
import { useAtom } from "jotai";
import { unavailableTimesAtom } from "@/store/atoms";

const Selection = ({ date }: { date: string }) => {
  //1日中予定ありボタンを押しているかどうか
  const [isSetAllSchedule, setIsSetAllSchedule] = useState(false);
  // 選択された要素の ID を保持する state（Set を使用）
  const [selected, setSelected] = useState<Set<number>>(() => new Set());
  //Jotaiでatomを取得
  const [unavailableTimes, setUnavailableTimes] = useAtom(unavailableTimesAtom);
  const isFirstRender = useRef(true);
  interface DecompressedData {
    [key: string]: number[];
  }

  // 初期レンダリング時にsessionStorageのデータを読み込み;
  useEffect(() => {
    const storedData = sessionStorage.getItem("unavailableTimes");
    if (storedData) {
      try {
        const decompressedData: DecompressedData = JSON.parse(atob(storedData));
        const unavailableDatesArray: number[] = decompressedData[date];
        console.log();
        setSelected(new Set(unavailableDatesArray));
        //　全ての時間帯がダメな場合は、1日中予定有りのボタンをリセットに変更する
        if (unavailableDatesArray.length === 19) {
          setIsSetAllSchedule(true);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  //時間が選択されるたびにJotaiで状態管理
  useEffect(() => {
    //初回レンダリング時は回避
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    //Setから配列に変換
    const selectedToArray: number[] = Array.from(selected);
    setUnavailableTimes((prev) => ({ ...prev, [date]: selectedToArray }));
  }, [date, selected]);

  // 選択対象の要素から data-key 属性の値を抽出して数値の配列に変換する関数
  const extractIds = (els: Element[]): number[] =>
    els
      .map((v) => v.getAttribute("data-key"))
      .filter(Boolean)
      .map(Number);

  // 選択開始時のイベントハンドラー
  const onStart = ({ event, selection }: SelectionEvent) => {
    // Ctrl や Meta キーが押されていなければ、既存の選択をクリアする
    if (!event?.ctrlKey && !event?.metaKey) {
      selection.clearSelection();
      setSelected(new Set());
    }
  };
  // 選択中のイベントハンドラー
  const onMove = ({
    store: {
      changed: { added, removed },
    },
  }: SelectionEvent) => {
    setSelected((prev) => {
      // 前の選択状態をコピー
      const next = new Set(prev);
      // 追加された要素の ID を追加
      extractIds(added).forEach((id) => next.add(id));
      // 削除された要素の ID を削除
      extractIds(removed).forEach((id) => next.delete(id));
      return next;
    });
  };

  const handleSetAllSchedules = () => {
    setIsSetAllSchedule(true);
    const fullSelected = new Set([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ]);
    setSelected(fullSelected);
  };

  const handleCancel = () => {
    setIsSetAllSchedule(false);
    setSelected(new Set());
  };

  return (
    <div className="flex flex-col justify-center gap-y-5 items-center">
      <p className="text-xl font-bold ">{date}</p>
      <div className="h-auto w-auto shadow-custom-neumorphism rounded-xl mb-2">
        <Button
          onClick={
            isSetAllSchedule
              ? () => handleCancel()
              : () => handleSetAllSchedules()
          }
          className="bg-bgNuemo text-black rounded-xl"
        >
          {isSetAllSchedule ? "リセット" : "1日中予定あり"}
        </Button>
      </div>
      <div className="w-auto h-auto bg-red-400 shadow-custom-neumorphism rounded-lg">
        <SelectionArea //SelectionArea コンポーネントの selectablesプロパティには、選択対象の要素を示すセレクタを指定します
          className="container"
          onStart={onStart}
          onMove={onMove}
          selectables=".selectable"
        >
          {new Array(19).fill(0).map((_, index) => (
            <div
              key={index}
              //   選択状態の場合は selected クラスを追加（スタイルでハイライトできます）
              className={`selectable ${
                selected.has(index) ? "!bg-slate-800" : ""
              } w-40 h-6 text-sm flex items-center border border-t-0 border-x-0 border-b-1 border-gray-400 border-opacity-50 justify-center bg-bgNuemo ${
                index === 0 && "rounded-t-lg"
              } 
              ${index === 18 && "rounded-b-lg"}
              `}
              data-key={index}
            >
              {index + 6}:00
            </div>
          ))}
        </SelectionArea>
      </div>
    </div>
  );
};

export default Selection;
