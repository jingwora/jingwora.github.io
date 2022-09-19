---
tags: [" #medroot"]
aliases: []
roots: [rhag-]
forms: [combining]
alphabet:: R
definition: [flow profusely homorrhage]
---
>[!Note] DEFINITION of rhag-
>flow profusely, hemorrhage
>*see also: [[rhe-]] (flow)*
_____
>[!info]+ ETYMOLOGY of rhag-
>#greek rhegnynai (burst forth)
_____
>[!example]+ RELATED TERMS to rhag-
>
_____
>[!tip]+ DERIVATIONS of rhag-
>```dataview
>TABLE definition AS Definition 
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0
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