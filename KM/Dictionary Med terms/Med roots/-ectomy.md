---
tags: [" #medroot"]
aliases: []
roots: [-ectomy]
forms: [compound suffix form, noun]
alphabet:: E
definition: [surgical excision, removal of all or part of an organ]
---
>[!Note] DEFINITION of -ectomy
forms nouns: >[[ecto-|ect-]][[tom-]][[-y]] - surgical excision, removal of an organ (condition of cutting out)
_____
>[!info]+ ETYMOLOGY of -ectomy
>
_____
>[!example]+ RELATED TERMS to -ectomy
>
_____
>[!tip]+ DERIVATIONS of -ectomy
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