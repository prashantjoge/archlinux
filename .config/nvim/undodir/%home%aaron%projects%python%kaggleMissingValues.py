Vim�UnDo� J�LB������:����'��'�_��3���%��<�   8                 "       "   "   "    \G�    _�                     '       ����                                                    
                                                                                                                                                                                                                                                                                                        \��     �   '               �   '            5�_�                    (   R    ����                                                    
                                                                                                                                                                                                                                                                                                        \�$     �   '              Rcols_with_missing= (col for col in X_train.columns if X_train[col].isnull().any())5�_�                    *       ����                                                    
                                                                                                                                                                                                                                                                                                        \�k     �   )              	imputed_X_train_plus[col+'w']5�_�                    *       ����                                                    
                                                                                                                                                                                                                                                                                                        \�m     �   )              	imputed_X_train_plus[col+'_w']5�_�                    *   )    ����                                                    
                                                                                                                                                                                                                                                                                                        \�v     �   )              )	imputed_X_train_plus[col+'_was_missing']5�_�                    *   D    ����                                                    
                                                                                                                                                                                                                                                                                                        \�     �   )              E	imputed_X_train_plus[col+'_was_missing']= imputed_X_train_plus[col}]5�_�                    *   D    ����                                                    
                                                                                                                                                                                                                                                                                                        \�     �   )              D	imputed_X_train_plus[col+'_was_missing']= imputed_X_train_plus[col]5�_�      	              +   '    ����                                                    
                                                                                                                                                                                                                                                                                                        \�     �   *              (	imputed_X_test_plus[col+'_was_missing']5�_�      
           	   +   (    ����                                                    
                                                                                                                                                                                                                                                                                                        \�     �   *              (	imputed_X_test_plus[col+'_was_missing']5�_�   	              
   +   >    ����                                                    
                                                                                                                                                                                                                                                                                                        \��     �   +            5�_�   
                 ,        ����                                                    
                                                                                                                                                                                                                                                                                                        \��     �   +               �   ,            5�_�                    -        ����                                                    
                                                                                                                                                                                                                                                                                                        \��    �         3      Lmelb_numeric_predictors = melb_predictors.:select_dtypes(exclude=['object'])�   '   *   2      Rcols_with_missing= (col for col in X_train.columns if X_train[col].isnull().any())�   )   ,   2      M	imputed_X_train_plus[col+'_was_missing']= imputed_X_train_plus[col].isnull()   J	imputed_X_test_plus[col+'_was_missing']=imputed_X_test_plus[col].isnull()5�_�                            ����                                                    
                                                                                                                                                                                                                                                                                                        \�    �               3   4from sklearn.model_selection import train_test_split   /from sklearn.metrics import mean_absolute_error   2from sklearn.ensemble import RandomForestRegressor   import pandas as pd           # type pandas.DataFrame   melb_data = pd.read_csv(   ?    '~/projects/datasets/melb/MELBOURNE_HOUSE_PRICES_LESS.csv')   pd.   melb_data = melb_data.dropna()   melb_target = melb_data.Price   Hmelb_predictors = melb_data.drop(['Price'], axis=1)  # type pd.DataFrame   # using numeric predictors       Mmelb_numeric_predictors = melb_predictors.: select_dtypes(exclude=['object'])   4X_train, X_test, y_train, y_test = train_test_split(   X    melb_numeric_predictors, melb_target, train_size=0.7, test_size=0.3, random_state=0)           4def score_dataset(X_train, X_test, y_train, y_test):   #    model = RandomForestRegressor()           model.fit(X_train, y_train)   !    preds = model.predict(X_test)   -    return mean_absolute_error(y_test, preds)           cols_with_missing = [   B    col for col in X_train.columns if X_train[col].isnull().any()]   9reduced_X_train = X_train.drop(cols_with_missing, axis=1)   7reduced_X_test = X_test.drop(cols_with_missing, axis=1)   3# y_train = X_train.drop(cols_with_missing, axis=1)   1# y_test = X_test.drop(cols_with_missing, axis=1)   Gprint("Mean Absolute Error from dropping columns with Missing Values:")   Fprint(score_dataset(reduced_X_train, reduced_X_test, y_train, y_test))       %imputed_X_train_plus = X_train.copy()   #imputed_X_test_plus = X_test.copy()   cols_with_missing = (   B    col for col in X_train.columns if X_train[col].isnull().any())   for col in cols_with_missing:   N	imputed_X_train_plus[col+'_was_missing'] = imputed_X_train_plus[col].isnull()   L	imputed_X_test_plus[col+'_was_missing'] = imputed_X_test_plus[col].isnull()   # Imputation   my_imputer = SimpleImputer()   Eimputed_X_train_plus = my_imputer.fit_transform(imputed_X_train_plus)   ?imputed_X_test_plus = my_imputer.transform(imputed_X_test_plus)       Jprint("Mean Absolute Error from Imputation while Track What Was Imputed:")   Pprint(score_dataset(imputed_X_train_plus, imputed_X_test_plus, y_train, y_test))5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             \�8    �   	   
          pd.5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                                             \�e    �         3      Mmelb_numeric_predictors = melb_predictors.: select_dtypes(exclude=['object'])5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \��     �         4       �         3    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \�   	 �          3    �         4      )from sklearn.impute import SimpleImputer 5�_�                            ����                                                    
                                                                                                                                                                                                                                                                                                        \#�   
 �         4       5�_�                   1       ����                                                                                                                                                                                                                                                                                                                                                            \R�     �   0   2   5      Eimputed_X_train_plus = my_imputer.fit_transform(imputed_X_train_plus)5�_�                    1   %    ����                                                                                                                                                                                                                                                                                                                                                            \R�     �   /   1          my_imputer = SimpleImputer()5�_�                    1   Q    ����                                                                                                                                                                                                                                                                                                                                                            \R�     �   /   1   5      my_imputer = SimpleImputer()?!?jedi=0, ?!?       (*_*data=None*_*, index=None, columns=None, dtype=None, copy=False) ?!?jedi?!?5�_�                    1   R    ����                                                                                                                                                                                                                                                                                                                                                            \R�     �   0   2   5      Rimputed_X_train_plus = pd.DataFrame(my_imputer.fit_transform(imputed_X_train_plus)5�_�                    )       ����                                                                                                                                                                                                                                                                                                                                                            \R�     �   /   1   5      tmy_imputer = SimpleImputer()?!?jedi=0, ?!?                                (*_*X*_*, y=None, **fit_params) ?!?jedi?!?5�_�                    ,       ����                                                                                                                                                                                                                                                                                                                                                            \R�     �   +   -   5          imputed_X_train_plus[col +    M                         '_was_missing'] = imputed_X_train_plus[col].isnull()�   +   -   5          imputed_X_train_plus[col +5�_�                    ,       ����                                                                                                                                                                                                                                                                                                                                                            \R�     �   +   -   4      S    imputed_X_train_plus[col + '_was_missing'] = imputed_X_train_plus[col].isnull()5�_�                   0       ����                                                                                                                                                                                                                                                                                                                                                            \S:     �   0   2   5       �   0   2   4    5�_�                    1   +    ����                                                                                                                                                                                                                                                                                                                                                            \S�     �   0   2   5      ,imputed_X_test_plus.columns=melb_data.colums5�_�                    1   +    ����                                                                                                                                                                                                                                                                                                                                                            \S�    �   +   .   6      R    imputed_X_train_plus[col +'_was_missing'] = imputed_X_train_plus[col].isnull()�   /   3   5      Simputed_X_train_plus = pd.DataFrame(my_imputer.fit_transform(imputed_X_train_plus))   -imputed_X_test_plus.columns=melb_data.columns5�_�                     3   '    ����                                                                                                                                                                                                                                                                                                                                                            \S�    �   2   4   7      /imputed_X_test_plus.columns = melb_data.columns5�_�      !                       ����                                                                                                                                                                                                                                                                                                                                                            \G�     �         7       5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                                                            \G�     �         7      4X_train, X_test, y_train, y_test = train_test_split(5�_�   !               "           ����                                                                                                                                                                                                                                                                                                                                                            \G�    �         8       5�_�                    /       ����                                                                                                                                                                                                                                                                                                                                                            \S3     �   /   0   4       5�_�                    2       ����                                                                                                                                                                                                                                                                                                                                                            \R�     �   2   3   5    �   1   3   5      Himputed_X_test_plus = from sklearn.ensemble import RandomForestRegressor   /from sklearn.metrics import mean_absolute_error   4from sklearn.model_selection import train_test_split   Qfrom sklearn.impute import SimpleImputermy_imputer.transform(imputed_X_test_plus)5��