---
tags: [" #medroot"]
aliases: [di(s)-, dif-]
forms: [prefix]
roots: [dis-, di(s)-, dif-]
alphabet:: D
definition: [apart, away]
---
>[!Note] DEFINITION of dis-
>apart, away
_____
>[!info]+ ETYMOLOGY of dis-
>#latin
>- di- before "g, v, l"
>- dif- before "f"
_____
>[!example]+ RELATED TERMS to dis-
>
>| [[dis-]] | apart | away |     -     |   -    |
|:--------:|:-----:|:----:|:---------:|:------:|
| [[dia-]] |  YES  |  -   |  through  | across |
| [[se-]]  |  YES  |  -   | away from | -       |
_____
>[!tip]+ DERIVATIONS of dis-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]