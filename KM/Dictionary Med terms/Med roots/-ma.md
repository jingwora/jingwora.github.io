---
tags: [" #medroot"]
aliases: []
roots: [-ma]
forms: [suffix, noun]
alphabet:: M
definition: [abnormal or diseased condition, substance]
---
>[!Note] DEFINITION of -ma
>1. forms nouns: abnormal or diseased condition (common)
>2. forms nouns: substance (rare)
_____
>[!info]+ ETYMOLOGY of -ma
>#greek
_____
>[!example]+ RELATED TERMS to -ma
> 
> | [[-ma]]   | abnormal or diseased condition | substance |
| --------- | ------------------------------ | --------- |
| [[-in]]   | -                              | YES       |
| [[-osis]] | YES                            | -          |
_____
>[!tip]+ DERIVATIONS of -ma
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
______
>[!faq]- Query
>
> ```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]