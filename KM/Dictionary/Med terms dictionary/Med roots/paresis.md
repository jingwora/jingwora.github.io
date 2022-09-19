---
tags: [" #medroot"]
aliases: []
roots: [paresis]
forms: [combining]
alphabet:: P
definition: [slackening of strength, paralysis]
---
>[!Note] DEFINITION of paresis
>slackening of strength, paralysis
_____
>[!info]+ ETYMOLOGY of paresis
>#greek paresis
_____
>[!example]+ RELATED TERMS to paresis
>
_____
>[!tip]+ DERIVATIONS of paresis
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