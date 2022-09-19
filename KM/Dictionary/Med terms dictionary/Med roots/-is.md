---
tags: [" #medroot"]
aliases: []
roots: [-is]
forms: []
alphabet:: I
definition: [of]
---
>[!Note] DEFINITION of -is
>possessive: "of" (sometimes it's just a declention, though)
_____
>[!info]+ ETYMOLOGY of -is
>#latin
_____
>[!example]+ RELATED TERMS to -is
>
_____
>[!tip]+ DERIVATIONS of -is
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
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