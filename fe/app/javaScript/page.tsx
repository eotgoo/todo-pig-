"use client";

import React, { useEffect } from "react";

const page = () => {
  // interfaces

  interface Student {
    name: string;
    age: number;
    surname?: string;
    gender: string;
  }

  // JS object start
  // Accessing objects start
  let students = [
    {
      name: "Сэд-Эрдэнэ",
      age: 19,
      gender: "male",
    },
    {
      name: "Индра",
      age: 19,
      gender: "female",
    },
    {
      name: "Хатнаа ",
      age: 21,
      gender: "male",
    },
    {
      name: "Тэмүүлэн",
      age: 23,
      gender: "male",
    },
    {
      name: "Намуун",
      age: 23,
      gender: "female",
    },
    {
      name: "Намуун",
      age: 24,
      gender: "female",
    },
  ];

  // Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
  const genderCounter = (students: Student[]) => {
    let male = 0;
    let female = 0;

    students.map((student: Student) => {
      switch (student.gender) {
        case "male":
          male++;
          break;
        case "female":
          female++;
          break;
      }
    });
    return { male, female };
  };

  // Сурагчдын насны дунджийг олох функц бичих
  const studentsAvgAge = (students: Student[]) => {
    let avgAge = 0;
    let sumAge = 0;
    students.map((student: any) => {
      sumAge += student.age;
    });
    avgAge = sumAge / students.length;
    return avgAge;
  };

  // Сурагчидад овог нэмж оруулах
  const surnameAdder = (students: Student[]) => {
    let surnameAddedStudents: {
      name: string;
      age: number;
      surName: string;
      gender: string;
    }[] = [];

    const surnames = [
      "Анхаа",
      "Ганаа",
      "Золоо",
      "Золбоо",
      "Цэцэгээ",
      "Төрөө",
      "Түшиг",
    ];

    students.map((student: Student) => {
      surnameAddedStudents.push({
        ...student,
        surName: surnames[Math.floor(Math.random() * surnames.length)],
      });
    });

    return surnameAddedStudents;
  };

  // Ижилхэн настай сурагчдыг олж шинэ array дотор хийх
  const groupedByAge = students.reduce((result: any, student: any) => {
    const { age } = student;
    if (!result[age]) {
      result[age] = [];
    }
    result[age].push(student);
    return result;
  }, {});

  // Ижилхэн нэртэй сурагчдыг олж шинэ array дотор хийх
  const groupedByName = students.reduce((result: any, student: any) => {
    const { name } = student;

    if (!result[name]) {
      result[name] = [];
    }
    result[name].push(student);

    return result;
  }, {});

  useEffect(() => {
    console.log(
      "Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих"
    );
    console.log("genderCounter: ", genderCounter(students));

    console.log("Сурагчдын насны дунджийг олох функц бичих");
    console.log("studentsAvgAge: ", studentsAvgAge(students));

    console.log("Сурагчидад овог нэмж оруулах");
    console.log("surnameAdder: ", surnameAdder(students));

    console.log("Ижилхэн настай сурагчдыг олж шинэ array дотор хийх  ");
    console.log("groupByAge: ", groupedByAge);

    console.log("Ижилхэн нэртэй сурагчдыг олж шинэ array дотор хийх  ");
    console.log("groupedByName: ", groupedByName);
  }, []);
  // Accessing objects end
  // JS object end

  // JS method start
  // JS method end

  return <div>JS Lesson</div>;
};

export default page;
