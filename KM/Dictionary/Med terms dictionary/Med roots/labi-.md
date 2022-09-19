---
tags: [" #medroot"]
aliases: []
roots: [labi-]
forms: [combining]
alphabet:: L
definition: [lip]
---
>[!Note] DEFINITION of labi-
>lip
_____
>[!info]+ ETYMOLOGY of labi-
>#latin labium
_____
>[!example]+ RELATED TERMS to labi-
>
>| [[cheil-]] | lip |
|:----------:|:---:|
| [[labi-]]  | YES |
_____
>[!tip]+ DERIVATIONS of labi-
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