---
tags: [" #medroot"]
aliases: []
roots: [-logy]
forms: [suffix form, noun]
alphabet:: L
definition: [study, science, the study or science of]
---
>[!Note] DEFINITION of -logy
>forms nouns: [[log-]][[-y]] - study, science, the study or science of
_____
>[!info]+ ETYMOLOGY of -logy
>
_____
>[!example]+ RELATED TERMS to -logy
_____
>[!tip]+ DERIVATIONS of -logy
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]