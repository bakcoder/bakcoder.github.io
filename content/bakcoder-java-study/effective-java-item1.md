---
emoji: 💻
title: 이펙티브 자바-Item 1. 생성자 대신 정적 팩터리 메서드를 고려하라.
date: '2022-10-27 21:12:00'
author: 바코더
tags: Java
categories: Java
---

> ###🔔 목표
>
> public 생성자가 아닌 정적 팩터리 메서드를 통해 객체를 반환하는 기법을 익히자

---

## 정적 팩터리 메서드란?

- `정적 팩터리 메서드(static factory method)`란 인스턴스를 얻는 전통적인 수단인 public 생성자가 아닌
  `정적 메서드를 이용`하여 해당 클래스의 인스턴스를 반환하는 기법이다.

## 정적 팩터리 메서드의 장단점

- 장점

  1. 이름을 가질 수 있다.(동일한 시그니처의 생성자는 두개 가질 수 없다.)

  ```java
    public class Customer {
        public static Customer regularCustomer(Grade grade) {...};
        public static Customer vipCustomer(Grade grade) {...};
    }
  ```

  2. 호출될 때마다 인스턴트를 새로 생성하지 않아도 된다.(Boolean.valueOf)

  ```java
    public static Boolean valueOf(boolean b) {
        return b ? Boolean.TRUE : Boolea.FALSE;
    }
  ```

  ```note
      인스턴스 통제(instance-controlled) 클래스
      tip 1. 열거 타입
        - 인스턴스가 하나만 만들어짐을 보장한다.(싱글톤 패턴 구현 시 사용)
        - Type-Safety 보장

      tip 2. 플라이웨이트(Flyweight) 패턴
        - 객체를 가볍게 만들어 메모리 사용을 줄이는 패턴
  ```

  3. 반환 타입의 하위 타입 객체를 반환할 수 있는 능력이 있다.(인터페이스 기반 프레임워크, 인터페이스에 정적 메소드)

  ```java
    public List<String> getStringList() {
        ArrayList<String> strArrList = new ArrayList<>();
        strArrList.add("bakcoder");
        return strArrList;
    }
  ```

  ```note
    tip 3. 인터페이스에 정적 메소드(자바 8,9에서 인터페이스 변화)
     - 기본 메소드(구현체)와 정적 메소드를 가질 수 있다.
       (자바 9는 private static 메소드도 가능)
  ```

  4. 입력 매개변수에 따라 매번 다른 클래스의 객체를 반환할 수 있다.(EnumSet)
  5. 정적 팩터리 메서드를 작성하는 시점에는 반환할 객체의 클래스가 존재하지 않아도 된다. (서비스 제공자 프레임워크)

  ```note
    tip 4. 서비스 제공자 프레임워크 (ex. JDBC)
      - 주요 구성 요소
        a. 서비스 제공자 인터페이스(SPI)와 서비스 제공자 (구현체)
        b. 서비스 제공자 등록 API : 서비스 인터페이스 구현체 등록
        c. 서비스 접근 API : 클라이언트가 서비스 인터페이스 인스턴스를 가져올 때 사용

    tip 5. 리플렉션
      - 클래스로더를 통해 읽어온 클래스 정보를 사용하는 기술
      - 클래스 조회, 인스턴스 생성, 메소드 실행 등 가능
        ex) Class<?>  studyClass = Class.forName("bakcoder.effective.java.Study");
            Constructor<?> studyConstructor = studyClass.getConstructor();
  ```

- 단점
  - 상속을 하려면 public이나 protected 생성자가 필요하니 정적 팩터리 메서드만 제공하면 하위 클래스를 만들 수 없다.
  - 정적 팩터리 메서드는 프로그래머가 찾기 어렵다.

---

> ###📚 출처
>
> [인프런] 이펙티브 자바 완벽 공략 1부, 백기선
>
> [책] 이펙티브 자바, 조슈아 블로크
