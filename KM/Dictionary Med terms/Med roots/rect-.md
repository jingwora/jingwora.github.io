---
tags: [" #medroot"]
aliases: []
roots: [rect-]
forms: [combining]
alphabet:: R
definition: [rectum]
---
>[!Note] DEFINITION of rect-
>rectum
>*see also: [[col-|colon-]]
_____
>[!info]+ ETYMOLOGY of rect-
>#latin rectus (straight)
_____
>[!example]+ RELATED TERMS to rect-
>
_____
>[!tip]+ DERIVATIONS of rect-
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