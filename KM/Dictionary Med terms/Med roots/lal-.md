---
tags: [" #medroot"]
aliases: []
roots: [lal-]
forms: [combining]
alphabet:: L
definition: [talk]
---
>[!Note] DEFINITION of lal-
>talk
>*see also: [[pha-]] (communicate), [[phem-]] (speech)*
_____
>[!info]+ ETYMOLOGY of lal-
>#greek lalein
_____
>[!example]+ RELATED TERMS to lal-
>
>| [[lal-]] | talk |      -      |  -   |
|:--------:|:----:|:-----------:|:----:|
| [[pha-]] | YES  | communicate | talk |
_____
>[!tip]+ DERIVATIONS of lal-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]