---
tags: [" #medroot"]
aliases: []
roots: [-ist]
forms: [suffix, nouns]
alphabet:: I
definition: [a person interested in]
---
>[!Note] DEFINITION of -ist
>forms nouns: a person interested in
>*see also: [[-ian]]*
_____
>[!info]+ ETYMOLOGY of -ist
>#greek
_____
>[!example]+ RELATED TERMS to -ist
>
_____
>[!tip]+ DERIVATIONS of -ist
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