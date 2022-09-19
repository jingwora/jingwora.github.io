---
tags: [" #medroot"]
aliases: []
roots: [-ation]
forms: [suffix, noun]
alphabet:: A
definition: [the act of (being), the result of (being), something that is]
---
>[!Note] DEFINITION of -ation
>forms nouns indicating an action/process: the act of (being), the result of (being), something that is
_____
>[!info]+ ETYMOLOGY of -ation
>#latin
_____
>[!example]+ RELATED TERMS to -ation
>
>| [[-ation]] | the act of (being) | the result of (being) | something that is | -               |
| ---------- | ------------------ | --------------------- | ----------------- | ------------------- |
| [[-ce]]    | YES                | -                     | -                 | the state of (being) |
| [[-cy]]    | YES                | -                     | -                 | the state of (being)                    |
_____
>[!tip]+ DERIVATIONS of -ation
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