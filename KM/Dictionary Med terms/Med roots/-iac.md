---
tags: [" #medroot"]
aliases: []
roots: [-iac]
forms: [suffix, noun]
alphabet:: I
definition: [person afflicted with]
---
>[!Note] DEFINITION of -iac
>forms nouns: person afflicted with
_____
>[!info]+ ETYMOLOGY of -iac
>#greek
_____
>[!example]+ RELATED TERMS to -iac
>
_____
>[!tip]+ DERIVATIONS of -iac
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