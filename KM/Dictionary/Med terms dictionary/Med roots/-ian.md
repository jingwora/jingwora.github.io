---
tags: [" #medroot"]
aliases: []
roots: [-ian]
forms: [suffix, noun]
alphabet:: I
definition: [indicatesa an expert in a certain field]
---
>[!Note] DEFINITION of -ian
>forms nouns: indicates an expert in a certain field
>*see also: [[-ist]]*
_____
>[!info]+ ETYMOLOGY of -ian
>#latin
_____
>[!example]+ RELATED TERMS to -ian
>
_____
>[!tip]+ DERIVATIONS of -ian
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