# Chapter 06 : 데이터 타입, Summary

## 0. 도입
- 데이터 타입은 값의 종류를 의미하며 크게 **원시 타입(primitive type)**과 **객체 타입(object type)**으로 구분 가능

<br>

## 1. 숫자 타입
- 모든 수를 부동 소수점 형식의 실수로 해석
- 2진수, 8진수, 10진수, 16진수 등의 표현 가능
- 단, 변수 할당, 표현식 활용 등으로 숫자 타입을 활용하게 되면 모두 **10진수로 해석**됨

<br>

## 2. 문자열 타입
- C, Java 등과 다르게 문자열이 원시 타입에 속함
- 보통 작은 따옴표에 감싸서 표현

<br>

## 3. 템플릿 리터럴
- 백틱으로 감싸진 문자열
- multi-lines, expression interpolation, tagged template
- 그 중 tagged template은 처음 접해봤는데 신기했다. 
    → Tag function과 함께 string formatting, translate, HTML print 등에 활용된다고...
    → <a href="./templateLiteral.js">활용 예제</a>