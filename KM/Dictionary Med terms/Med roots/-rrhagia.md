---
tags: [" #medroot"]
aliases: []
roots: [-rrhagia]
forms: [compound suffix form, noun]
alphabet:: R
definition: [profuse discharge, hemorrhage]
---
>[!Note] DEFINITION of -rrhagia
>forms nouns: [[rhag-]][[-ia]] - profuse discharge, hemorrhage
_____
>[!info]+ ETYMOLOGY of -rrhagia
>
_____
>[!example]+ RELATED TERMS to -rrhagia
>
>
>| [[-rrhagia]] | profuse discharge | hemorrhage |  -  |
|:------------:|:-----------------:|:----------:|:---:|
|  [[-rrhea]]  |        YES        |     -      | excessive secretion    |
_____
>[!tip]+ DERIVATIONS of -rrhagia
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