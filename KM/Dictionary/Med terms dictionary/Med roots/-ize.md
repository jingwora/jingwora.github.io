---
tags: [" #medroot"]
aliases: []
roots: [-ize]
forms: [suffix, verb]
alphabet:: I
definition: [(to) make, (to) become, (to) cause to be, (to) subject to, (to) engage in]
---
>[!Note] DEFINITION of -ize
>forms verbs: (to) make, (to) become, (to) cause to be, (to) subject to, (to) engage in
>*see also: [[fac-]]*
_____
>[!info]+ ETYMOLOGY of -ize
>#greek
_____
>[!example]+ RELATED TERMS to -ize
>
_____
>[!tip]+ DERIVATIONS of -ize
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