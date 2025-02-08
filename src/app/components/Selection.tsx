"use client";

import React, { useState } from "react";
import { SelectionArea, SelectionEvent } from "@viselect/react";
import { Button } from "./button";

const Selection = ({ date }: { date: string }) => {
  // 選択された要素の ID を保持する state（Set を使用）
  const [selected, setSelected] = useState<Set<number>>(() => new Set());

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

  console.log(selected);

  return (
    <div className="flex flex-col justify-center gap-y-8 items-center">
      <p className="text-xl font-bold">{date}</p>
      <div className="h-auto w-auto shadow-custom-neumorphism rounded-xl">
        <Button className="bg-bgNuemo text-black rounded-xl">
          {" "}
          全日予定あり
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
