---
tags: [" #medroot"]
aliases: []
roots: [-rrhea]
forms: [compound suffix form, noun]
alphabet:: R
definition: [profuse discharge, excessive secretion]
---
>[!Note] DEFINITION of -rrhea
>forms nouns: [[rhe-]][[-a]] - profuse discharge, excessive secretion
_____
>[!info]+ ETYMOLOGY of -rrhea
>
_____
>[!example]+ RELATED TERMS to -rrhea
>
>| [[-rrhea]] | profuse discharge | excessive secretion |  -  |
|:------------:|:-----------------:|:----------:|:---:|
|  [[-rrhagia]]  |        YES        |     -      | hemorrhage    |
_____
>[!tip]+ DERIVATIONS of -rrhea
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