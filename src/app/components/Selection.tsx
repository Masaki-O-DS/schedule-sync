"use client";

import React, { useEffect, useRef, useState } from "react";
import { SelectionArea, SelectionEvent } from "@viselect/react";
import { Button } from "./button";
import { useAtom } from "jotai";
import { unavailableDatesAtom } from "@/store/atoms";
import { clientDecodeBase64Json } from "../utils/sessionStorageUtils";
interface UnavailableDates {
  [key: string]: number[];
}
const Selection = ({
  date,
  source,
  unavailableTimesProp = [],
}: {
  date: string;
  source: string;
  unavailableTimesProp?: number[];
}) => {
  //1日中予定ありボタンを押しているかどうか
  const [isSetAllSchedule, setIsSetAllSchedule] = useState(false);
  // 選択された要素の ID を保持する state（Set を使用）
  const [selected, setSelected] = useState<Set<number>>(() => new Set());
  //Jotaiでatomを取得
  const [, setUnavailableTimes] = useAtom(unavailableDatesAtom);
  const isFirstRender = useRef(true);

  // 初期レンダリング時にsessionStorageのデータを読み込み;
  useEffect(() => {
    if (source === "session") {
      const storedData = sessionStorage.getItem("unavailableTimes");
      const decodedData = clientDecodeBase64Json<UnavailableDates>(storedData);
      if (decodedData) {
        const unavailableDatesArray: number[] = decodedData[date] || [];
        setSelected(new Set(unavailableDatesArray));
        //　全ての時間帯がダメな場合は、1日中予定有りのボタンをリセットに変更する
        if (unavailableDatesArray.length === 19) {
          setIsSetAllSchedule(true);
        }
      }
    } else if (source === "fireStore") {
      setSelected(new Set(unavailableTimesProp));
      //　全ての時間帯がダメな場合は、1日中予定有りのボタンをリセットに変更する
      if (unavailableTimesProp.length === 19) {
        setIsSetAllSchedule(true);
      }
    }
  }, [date, source]);

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
  //何も処理を書いていないが、このonStart関数がないとクリックが正常に作動しない
  const onStart = () => {
    // Ctrl や Meta キーが押されていなければ、既存の選択をクリアする
    // if (!event?.ctrlKey && !event?.metaKey) {
    //   selection.clearSelection();
    //   setSelected(new Set());
    // }
  };

  // 選択中のイベントハンドラー
  const onMove = ({
    store: {
      changed: { added, removed },
    },
  }: SelectionEvent) => {
    setSelected((prev) => {
      // 前の選択状態をコピー
      const next = new Set([...prev, ...(unavailableTimesProp || [])]);

      // 追加された要素の ID を追加
      extractIds(added).forEach((id) => next.add(id));
      // 削除された要素の ID を削除
      extractIds(removed).forEach((id) => {
        if (!unavailableTimesProp.includes(id)) {
          next.delete(id);
        }
      });

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
    setSelected(new Set([...(unavailableTimesProp || [])]));
    console.log("selected", selected);
  };

  console.log("unavailableDatesProp", unavailableTimesProp);

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
      <div className="w-auto h-auto shadow-custom-neumorphism rounded-lg">
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
