---
tags: [" #medroot"]
aliases: []
roots: [-e]
forms: [suffix, noun]
alphabet:: E
definition: [noun]
---
>[!Note] DEFINITION of -e
>forms nouns. THE DEFINITIVE NOUN-FORMER das it...
_____
>[!info]+ ETYMOLOGY of -e
>
_____
>[!example]+ RELATED TERMS to -e
>
_____
>[!tip]+ DERIVATIONS of -e
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