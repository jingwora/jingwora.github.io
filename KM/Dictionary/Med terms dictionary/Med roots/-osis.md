---
tags: [" #medroot"]
aliases: []
roots: [-osis]
forms: [suffix, noun]
alphabet:: O
definition: [abnormal or diseased condition]
---
>[!Note] DEFINITION of -osis
>forms abstract nouns: abnormal or diseased condition
_____
>[!info]+ ETYMOLOGY of -osis
>#greek
_____
>[!example]+ RELATED TERMS to -osis
>
>| [[-osis]] | abnormal or diseased condition |     -     |
|:---------:|:------------------------------:|:---------:|
|  [[-ma]]  |              YES               | substance |
_____
>[!tip]+ DERIVATIONS of -osis
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