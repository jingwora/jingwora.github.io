---
tags: [" #medroot"]
aliases: [synaps-]
roots: [synap-, synaps-]
forms: [combining]
alphabet:: S
definition: [synapse]
---
>[!Note] DEFINITION of synap-
>synapse (point of contact)
_____
>[!info]+ ETYMOLOGY of synap-
>#greek synapsis (point of contact)
_____
>[!example]+ RELATED TERMS to synap-
>
_____
>[!tip]+ DERIVATIONS of synap-
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