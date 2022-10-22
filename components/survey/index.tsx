import React, { useEffect, useState, memo } from "react";
type SurveyListProp = {
  key: number;
  img: string;
  content: string;
  button: { id: number; select: string }[];
};
const SurveyList: SurveyListProp[] = [
  {
    key: 0,
    img: "",
    content: "1",
    button: [{ id: 3, select: "시작" }],
  },
  {
    key: 1,
    img: "",
    content: "2",
    button: [
      { id: 0, select: "1" },
      { id: 1, select: "2" },
    ],
  },
  {
    key: 2,
    img: "",
    content: "3",
    button: [
      { id: 0, select: "1" },
      { id: 1, select: "2" },
    ],
  },
  {
    key: 3,
    img: "",
    content: "4",
    button: [
      { id: 0, select: "1" },
      { id: 1, select: "2" },
    ],
  },
  {
    key: 4,
    img: "",
    content: "4",
    button: [
      { id: 0, select: "1" },
      { id: 1, select: "2" },
    ],
  },
  {
    key: 5,
    img: "",
    content: "5",
    button: [
      { id: 0, select: "1" },
      { id: 1, select: "2" },
    ],
  },
  {
    key: 6,
    img: "",
    content: "6",
    button: [
      { id: 0, select: "1" },
      { id: 1, select: "2" },
    ],
  },
  {
    key: 7,
    img: "",
    content: "7",
    button: [
      { id: 0, select: "1" },
      { id: 1, select: "2" },
    ],
  },
  {
    key: 8,
    img: "",
    content: "8",
    button: [
      { id: 0, select: "1" },
      { id: 1, select: "2" },
    ],
  },
  {
    key: 9,
    img: "",
    content: "9",
    button: [
      { id: 0, select: "1" },
      { id: 1, select: "2" },
    ],
  },
  {
    key: 10,
    img: "",
    content: "10",
    button: [
      { id: 0, select: "1" },
      { id: 1, select: "2" },
    ],
  },
  {
    key: 11,
    img: "",
    content: "10",
    button: [{ id: 0, select: "공유하기" }],
  },
];
type SurveyResultProp = {
  img: string;
  content: string;
};
const SurveyResult: SurveyResultProp[] = [
  {
    img: "",
    content: "1번유형",
  },
  {
    img: "",
    content: "2번유형",
  },
  {
    img: "",
    content: "3번유형",
  },
  {
    img: "",
    content: "4번유형",
  },
  {
    img: "",
    content: "5번유형",
  },
  {
    img: "",
    content: "6번유형",
  },
  {
    img: "",
    content: "7번유형",
  },
  {
    img: "",
    content: "8번유형",
  },
  {
    img: "",
    content: "9번유형",
  },
  {
    img: "",
    content: "10번유형",
  },
];
const Survey = () => {
  const [list, setList] = useState(SurveyList[0]);
  const [result, setResult] = useState<any>([]);
  const [decimal, setDecimal] = useState<number>(0);
  const contentSelect = (): JSX.Element => {
    switch (decimal) {
      case 1: {
        return (
          <div>
            {SurveyResult[0].img}
            <div>{SurveyResult[0].content}</div>
          </div>
        );
      }
      case 1023: {
        return (
          <div>
            {SurveyResult[1].img}
            <div>{SurveyResult[1].content}</div>
          </div>
        );
      }
      default: {
        return (
          <div>
            {SurveyResult[2].img}
            <div>{SurveyResult[2].content}</div>
          </div>
        );
      }
    }
  };
  useEffect(() => {
    contentSelect();
  }, [decimal]);
  useEffect(() => {
    if (list.key === 11) {
      const ResultData = result;
      let decimal = ResultData.shift();
      decimal = parseInt(ResultData.join(""), 2);
      setDecimal(decimal);
    }
  }, [result]);

  const isClick = (e) => {
    const value = e.target.value;
    if (list.key < 11) {
      setResult([...result, value]);
      setList((curr) => SurveyList[Number(curr.key) + 1]);
    }
  };
  return (
    <>
      <div>
        {/* 그림 */}
        <section>
          <div>{list.img}</div>
        </section>
        {/* 설명 */}
        <section>{list.content}</section>
        {/* 선택 버튼 */}
        <section>
          {list.key == 11 ? (
            <>결과 {contentSelect()}</>
          ) : (
            list.button.map(({ id, select }) => (
              <React.Fragment key={id}>
                <button type="button" value={id} onClick={(e) => isClick(e)}>
                  {select}
                </button>
              </React.Fragment>
            ))
          )}
        </section>
      </div>
    </>
  );
};
Survey.displayName = "Survey";
export default memo(Survey);
