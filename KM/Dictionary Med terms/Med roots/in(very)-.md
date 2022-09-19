---
tags: [" #medroot"]
aliases: [il(very)-, im(very)-, ir(very)-]
forms: [prefix]
roots: [in(very)-, il(very)-, im(very)-, ir(very)-]
alphabet:: I
definition: [very, thorough]
---
>[!Note] DEFINITION of in(very)-
>very, thorough
>Not to be confused with [[in(in)-]] or [[in(not)-]]
_____
>[!info]+ ETYMOLOGY of in(very)-
>#latin
>- il- before "l"
>- im- before "b, m, p"
>- ir- before "r"
_____
>[!example]+ RELATED TERMS to in(very)-
>
>| [[in(very)-]] | very | thorough |    -    |    -     |
|:-------------:|:----:|:--------:|:-------:|:--------:|
|   [[con-]]    | YES  |   YES    |  with   | together |
|    [[ob-]]    | YES  |   YES    | against |  toward  |
|   [[per-]]    | YES  |   YES    | through        |          |
_____
>[!tip]+ DERIVATIONS of in(very)-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
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