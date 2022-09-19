---
tags: [" #medroot"]
aliases: []
roots: [neur-]
forms: [combining]
alphabet:: N
definition: [neuron, nerve, nervous system]
---
>[!Note] DEFINITION of neur-
>neuron, nerve, nervous system
_____
>[!info]+ ETYMOLOGY of neur-
>#greek neuron (tendon)
_____
>[!example]+ RELATED TERMS to neur-
_____
>[!tip]+ DERIVATIONS of neur-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]