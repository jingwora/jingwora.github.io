---
tags: [" #medroot"]
aliases: []
roots: [-malacia]
forms: [suffix form, noun]
alphabet:: M
definition: [softening of]
---
>[!Note] DEFINITION of -malacia
>forms nouns: [[malac-]][[-ia]] - softening (of tissues) of
_____
>[!info]+ ETYMOLOGY of -malacia
>
_____
>[!example]+ RELATED TERMS to -malacia
>
_____
>[!tip]+ DERIVATIONS of -malacia
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