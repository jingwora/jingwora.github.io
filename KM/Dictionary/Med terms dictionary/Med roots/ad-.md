---
tags: [" #medroot"]
aliases: [ac-, af-, ag-, al-, an-, ap-, as-, a(d)-, at-]
forms: [prefix]
roots: [ad-, ac-, af-, ag-, al-, an(d)-, ap-, as-, a(d)-, at-]
alphabet:: A
definition: [to, toward]
---
>[!Note] DEFINITION of ad-
>to, toward
_____
>[!info]+ ETYMOLOGY of ad-
>#latin
>- ac- before "c"
>- af- before "f"
>- ag- before "g"
>- al- before "l"
>- an- before "n"
>- ap- before "p"
>- as- before "s"
>- a- before "sp"
>- at- before "t"
_____
>[!example]+ RELATED TERMS to ad-
>
| [[ad-]] | toward |    to    |        -         |
|:-------:|:------:|:-------:|:----------------:|
| [[-ad]] | YES |       |        -         |
| [[ob-]] |  YES   | against | very, thoroughly |
_____
>[!tip]+ DERIVATIONS of ad-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]