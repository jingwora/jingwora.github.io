---
tags: [" #medroot"]
aliases: []
roots: [-iasis]
forms: [suffix, noun]
alphabet:: I
definition: [disease, abnormal condition, abnormal presence of]
---
>[!Note] DEFINITION of -iasis
>forms nouns: disease, abnormal condition, abnormal presence of
_____
>[!info]+ ETYMOLOGY of -iasis
>#greek
_____
>[!example]+ RELATED TERMS to -iasis
>
>| [[-iasis]] | disease | abnormal condition | abnormal presence of | -       |
| ---------- | ------- | ------------------ | -------------------- | ------- |
| [[nos-]]   | YES     | -                  | -                    | illness |
| [[-oma]]   | YES     | -                  | -                    | tumor   |
| [[path-]]  | YES     | -                  | -                    | -       |
| [[-pathy]] | YES     | -                  | -                    | -        |
_____
>[!tip]+ DERIVATIONS of -iasis
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]