---
tags: [" #medroot"]
aliases: [cervix]
roots: [cervic-, cervix]
forms: [combining]
alphabet:: C
definition: [neck]
---
>[!Note] DEFINITION of cervic-
>neck (of the uterus): cervix uteri
_____
>[!info]+ ETYMOLOGY of cervic-
>#latin cervix, cervicis
_____
>[!example]+ RELATED TERMS to cervic-
>
>| [[cervic-]]  | neck |   -    |
|:------------:|:----:|:------:|
| [[trachel-]] | YES  | cervix |
_____
>[!tip]+ DERIVATIONS of cervic-
>```dataview
>TABLE definition AS Definition 
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0
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