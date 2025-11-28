import { describe, it } from "node:test";
import { countDifferentLetters } from "./task.js"
import { equal } from "node:assert/strict"

it("should return 0 string, when empty string given", () => {
  equal(countDifferentLetters(""), 0);
})

it("should return the number of the characters, only unique charcters are give.", () => {
  equal(countDifferentLetters("abcdefgh"), 8);
})

it("should return the different character number, duplications exists.", () => {
  equal(countDifferentLetters("bcabccab"), 3);
})

it("should return 1, all characters are the same", () => {
  equal(countDifferentLetters("aaaaaaaaaa"), 1);
})

it("should count the lowercase and uppercase characters as a same kind", () => {
  equal(countDifferentLetters("dDdddDddD"), 1);
})

it("should count properly, ignore charcters are in the beginning", () => {
  equal(countDifferentLetters("?abc"), 3);
})

it("should count properly, ignore charcters are in the end", () => {
  equal(countDifferentLetters("abc?"), 3);
})

it("should ignore numbers", () => {
  equal(countDifferentLetters("bca12bcc5ab"), 3);
})

it("should ignore punctuation", () => {
  equal(countDifferentLetters("b?cab;cc.ab"), 3);
})

it("should ignore whitespaces", () => {
  equal(countDifferentLetters("b cab cc ab"), 3);
})

it("should return 0, only ignore characters are given", () => {
  equal(countDifferentLetters("1? ; 56 !"), 0);
})

