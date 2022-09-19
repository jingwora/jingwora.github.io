---
tags: [" #medroot"]
aliases: [metr_-]
roots: [-metra]
forms: [combining]
alphabet:: M
definition: [uterus]
---
>[!Note] DEFINITION of -metra
>uterus
>*not to be confused with: [[metr-]]*
_____
>[!info]+ ETYMOLOGY of -metra
>#greek metra
_____
>[!example]+ RELATED TERMS to -metra
>
>| [[-metra]]  | uterus | -    | -   |
| ----------- | ------ | ---- | --- |
| [[hyster-]] | YES    | -    | -   |
| [[uter-]]   | YES    | womb | belly    |
_____
>[!tip]+ DERIVATIONS of -metra
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