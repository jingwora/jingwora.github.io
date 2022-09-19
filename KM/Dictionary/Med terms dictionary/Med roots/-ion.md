---
tags: [" #medroot"]
aliases: []
roots: [-ion]
forms: [suffix, noun]
alphabet:: I
definition: [the act of]
---
>[!Note] DEFINITION of -ion
>forms nouns: the act of
>*see also: [[-ation]]*
_____
>[!info]+ ETYMOLOGY of -ion
>#latin
_____
>[!example]+ RELATED TERMS to -ion
>
_____
>[!tip]+ DERIVATIONS of -ion
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