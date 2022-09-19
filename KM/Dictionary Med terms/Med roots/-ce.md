---
tags: [" #medroot"]
aliases: []
roots: [-ce]
forms: [suffix, noun]
alphabet:: C
definition: [the act of (being), the state of (being)]
---
>[!Note] DEFINITION of -ce
>forms nouns: the act of (being), the state of (being)
_____
>[!info]+ ETYMOLOGY of -ce
>#latin
_____
>[!example]+ RELATED TERMS to -ce
>
>| [[-ce]]    | the act of (being) | the state of (being) | -                     | -                |
| ---------- | ------------------ | -------------------- | --------------------- | ---------------- |
| [[-ation]] | YES                | -                    | the result of (being) | something that is |
| [[-cy]]    | YES                | YES                  | -                     | -                 |
_____
>[!tip]+ DERIVATIONS of -ce
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]