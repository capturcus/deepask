#!/usr/bin/env python3

with open("questions.txt") as f:
    contents = f.read()

out = "export class Questions { public static QUESTIONS_EASY = ["

questions_ez = ""
questions_hard = ""

qs = []

for line in contents.split("\n"):
    if (line.strip() == ""):
        questions_ez = ",".join(qs)
        qs = []
        continue
    qs.append("\"" + line + "\"")

questions_hard = ",".join(qs)

out += questions_ez + "]; public static QUESTIONS_HARD = ["
out += questions_hard + "]; }"

with open("src/questions.ts", "w") as f:
    f.write(out)
