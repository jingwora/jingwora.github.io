---
tags: [" #medroot"]
aliases: [herpet-]
roots: [herpes, herpet-]
forms: [combining]
alphabet:: H
definition: [herpes, a creeping skin disease]
---
>[!Note] DEFINITION of herpes
>herpes, a creeping skin disease
_____
>[!info]+ ETYMOLOGY of herpes
>#greek herpes, herpetos (shingles)
_____
>[!example]+ RELATED TERMS to herpes
>
_____
>[!tip]+ DERIVATIONS of herpes
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