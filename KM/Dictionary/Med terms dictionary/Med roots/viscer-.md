---
tags: [" #medroot"]
aliases: [viscus-]
roots: [viscer-, viscus-]
forms: [combining]
alphabet:: V
definition: [internal organ]
---
>[!Note] DEFINITION of viscer-
>internal organ(s)
_____
>[!info]+ ETYMOLOGY of viscer-
>#latin viscus, visceris
_____
>[!example]+ RELATED TERMS to viscer-
>
>|  [[viscer-]]  | internal organ |  -  |
|:-------------:|:--------------:|:---:|
| [[splanchn-]] |      YES       | viscus    |
_____
>[!tip]+ DERIVATIONS of viscer-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]