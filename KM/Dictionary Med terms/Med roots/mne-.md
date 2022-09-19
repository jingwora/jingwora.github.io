---
tags: [" #medroot"]
aliases: []
roots: [mne-]
forms: [combining]
alphabet:: M
definition: [remember]
---
>[!Note] DEFINITION of mne-
>remember
_____
>[!info]+ ETYMOLOGY of mne-
>#greek mimneskein
_____
>[!example]+ RELATED TERMS to mne-
>
_____
>[!tip]+ DERIVATIONS of mne-
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