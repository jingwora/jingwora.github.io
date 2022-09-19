---
tags: [" #medroot"]
aliases: []
roots: [-sclerosis]
forms: [suffix form, noun]
alphabet:: S
definition: [hardening of]
---
>[!Note] DEFINITION of -sclerosis
>forms nouns: [[scler-]][[-osis]] - hardening (of tissues) of
_____
>[!info]+ ETYMOLOGY of -sclerosis
>
_____
>[!example]+ RELATED TERMS to -sclerosis
>
_____
>[!tip]+ DERIVATIONS of -sclerosis
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