---
tags: [" #medroot"]
aliases: []
roots: [therm-]
forms: [combining]
alphabet:: T
definition: [heat, temperature]
---
>[!Note] DEFINITION of therm-
>heat, (body) temperature
_____
>[!info]+ ETYMOLOGY of therm-
>#greek therme
_____
>[!example]+ RELATED TERMS to therm-
>
>| [[therm-]] | heat | temperature |  -  |
|:----------:|:----:|:-----------:|:---:|
| [[calor-]] | YES  |      -      | energy    |
_____
>[!tip]+ DERIVATIONS of therm-
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