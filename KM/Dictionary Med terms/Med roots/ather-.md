---
tags: [" #medroot"]
aliases: []
roots: [ather-]
forms: [combining]
alphabet:: A
definition: [fatty deposit]
---
>[!Note] DEFINITION of ather-
>fatty deposit
>*see also: [[adip-]], [[lip-]], [[stear-]] (fat)*
_____
>[!info]+ ETYMOLOGY of ather-
>#greek athere (soup)
_____
>[!example]+ RELATED TERMS to ather-
>
_____
>[!tip]+ DERIVATIONS of ather-
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