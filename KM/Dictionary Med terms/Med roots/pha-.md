---
tags: [" #medroot"]
aliases: []
forms: [combining]
roots: [pha-]
alphabet:: P
definition: [speak, communicate, talk]
---
>[!Note] Definition of pha-
>speak, communicate
_____
>[!info]+ Etymology of pha-
>#greek phenai
_____
>[!example]+ Related terms to pha-
>
>|  [[pha-]]  | speak | communicate | talk |
|:----------:|:-----:|:-----------:|:----:|
|  [[lal-]]  |   -   |      -      | YES  |
| [[phras-]] |  YES  |      -      | -     |
_____
>[!tip]+ Derivations of pha-
>```dataview
TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]