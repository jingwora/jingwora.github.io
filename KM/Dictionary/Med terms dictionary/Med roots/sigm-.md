---
tags: [" #medroot"]
aliases: []
roots: [sigm-]
forms: [combining]
alphabet:: S
definition: [sigmoid colon]
---
>[!Note] DEFINITION of sigm-
>sigmoid [[col-|colon-]]
_____
>[!info]+ ETYMOLOGY of sigm-
> #greek sigma (s-shape)
_____
>[!example]+ RELATED TERMS to sigm-
>
_____
>[!tip]+ DERIVATIONS of sigm-
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