---
tags: [" #medroot"]
aliases: []
roots: [-itides]
forms: [suffix, noun]
alphabet:: I
definition: [inflammation]
---
>[!Note] DEFINITION of -itides
>forms *plural* nouns: inflammation (plural of [[-itis]])
_____
>[!info]+ ETYMOLOGY of -itides
>#greek
_____
>[!example]+ RELATED TERMS to -itides
>
_____
>[!tip]+ DERIVATIONS of -itides
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