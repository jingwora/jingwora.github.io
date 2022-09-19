---
tags: [" #medroot"]
aliases: [hyp-]
forms:: [prefix]
roots:: [hypo-, hyp-]
alphabet:: H
definition: [under, deficient, below normal, low]
---
>[!Note] Definition of hypo-
>under, deficient, below normal
>*see also: [[pen-]] (deficiency)*
_____
>[!info]+ Etymology of hypo-
>#greek
>- hyp- before "h" or {vowel}
_____
>[!example]+ Related terms to hypo-
>
>| [[hypo-]] | under | deficient | below normal |  -  |        -         |
|:---------:|:-----:|:---------:|:------------:|:---:|:----------------:|
|  [[a-]]   |   -   |    YES    |      -       | not | lacking, without |
| [[olig-]] |   -   |    YES    |      -       | few |        -         |
| [[sub-]]  |  YES  |     -     |      -       |  -  | -                 |
_____
>[!tip]+ Derivations of hypo-
>```dataview
TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]