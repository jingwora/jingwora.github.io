---
tags: [" #medroot"]
aliases: [oxy-]
forms: [combining]
roots: [ox-, oxy-]
alphabet:: O
definition: [acute, pointed, rapid, acid, oxygen]
---
>[!Note] Definition of ox-
>1. acute, pointed
>2. rapid
>3. acid
>4. oxygen
_____
>[!info]+ Etymology of ox-
>#greek oxys 
_____
>[!example]+ Related terms to ox-
>
>|  [[ox-]]   | acute | pointed | rapid | acid | oxygen |  -  |
|:----------:|:-----:|:-------:|:-----:|:----:|:------:|:---:|
| [[tachy-]] |   -   |    -    |  YES  |  -   |   -    | fast    |
_____
>[!tip]+ Derivations of ox-
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