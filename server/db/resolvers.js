

 import { GraphQLScalarType } from 'graphql'
 import {getAllCountrysHelper,getOneCountryHelper,createCountryHelper,updateCountryHelper,deleteCountryHelper,getAllDepartmentsHelper,getOneDepartmentHelper,createDepartmentHelper,updateDepartmentHelper,deleteDepartmentHelper,getAllGendersHelper,getOneGenderHelper,createGenderHelper,updateGenderHelper,deleteGenderHelper,getAllGenresHelper,getOneGenreHelper,createGenreHelper,updateGenreHelper,deleteGenreHelper,getAllKeywordsHelper,getOneKeywordHelper,createKeywordHelper,updateKeywordHelper,deleteKeywordHelper,getAllLanguagesHelper,getOneLanguageHelper,createLanguageHelper,updateLanguageHelper,deleteLanguageHelper,getAllLanguage_rolesHelper,getOneLanguage_roleHelper,createLanguage_roleHelper,updateLanguage_roleHelper,deleteLanguage_roleHelper,getAllMoviesHelper,getOneMovieHelper,createMovieHelper,updateMovieHelper,deleteMovieHelper,getAllPersonsHelper,getOnePersonHelper,createPersonHelper,updatePersonHelper,deletePersonHelper,getAllProduction_companysHelper,getOneProduction_companyHelper,createProduction_companyHelper,updateProduction_companyHelper,deleteProduction_companyHelper} from './helpers.js'

 const dateScalar = new GraphQLScalarType({
   name: 'Date',
   parseValue(value) {
     const d = new Date(value)
     const s = d.toISOString().substring(0, 10);
     console.log(`parseValue(${s})`);
     return s;
   },
   serialize(value) {                     // from Oracle to front end
     const d = new Date(value)
     const s = d.toISOString().substring(0, 10);
     // console.log(`serialize(${s})`);
      return s;
   },
 })

 const blobScalar = new GraphQLScalarType({
     name: 'Blob',
     parseValue(value) {
       return Buffer.from(value,'binary');
     },
     serialize(value) {
       return JSON.stringify(value);
     },
   })

 // Resolver to match the GraphQL query and return data
export const resolvers = {
   Date: dateScalar,
   Blob: blobScalar,

  Query: {
      countrys(root, args, context, info) {
        return getAllcountrysHelper();
      },
      country(root, {country_id}, context, info) {
        return getOneCountryHelper(country_id);
      },
      departments(root, args, context, info) {
        return getAlldepartmentsHelper();
      },
      department(root, {department_id}, context, info) {
        return getOneDepartmentHelper(department_id);
      },
      genders(root, args, context, info) {
        return getAllgendersHelper();
      },
      gender(root, {gender_id}, context, info) {
        return getOneGenderHelper(gender_id);
      },
      genres(root, args, context, info) {
        return getAllgenresHelper();
      },
      genre(root, {genre_id}, context, info) {
        return getOneGenreHelper(genre_id);
      },
      keywords(root, args, context, info) {
        return getAllkeywordsHelper();
      },
      keyword(root, {keyword_id}, context, info) {
        return getOneKeywordHelper(keyword_id);
      },
      languages(root, args, context, info) {
        return getAlllanguagesHelper();
      },
      language(root, {language_id}, context, info) {
        return getOneLanguageHelper(language_id);
      },
      language_roles(root, args, context, info) {
        return getAlllanguage_rolesHelper();
      },
      language_role(root, {role_id}, context, info) {
        return getOneLanguage_roleHelper(role_id);
      },
      movies(root, args, context, info) {
        return getAllmoviesHelper();
      },
      movie(root, {movie_id}, context, info) {
        return getOneMovieHelper(movie_id);
      },
      persons(root, args, context, info) {
        return getAllpersonsHelper();
      },
      person(root, {person_id}, context, info) {
        return getOnePersonHelper(person_id);
      },
      production_companys(root, args, context, info) {
        return getAllproduction_companysHelper();
      },
      production_company(root, {company_id}, context, info) {
        return getOneProduction_companyHelper(company_id);
      }
  },
Mutation: {
      createCountry(root, {input}, context, info) {
            return createcountryHelper(input);
          },
      updateCountry(root, {country_id, input}, context, info) {
            return updateCountryHelper(country_id, input);
          },
      deleteCountry(root, {country_id}, context, info) {
            return deleteCountryHelper(country_id);
          },
      createDepartment(root, {input}, context, info) {
            return createdepartmentHelper(input);
          },
      updateDepartment(root, {department_id, input}, context, info) {
            return updateDepartmentHelper(department_id, input);
          },
      deleteDepartment(root, {department_id}, context, info) {
            return deleteDepartmentHelper(department_id);
          },
      createGender(root, {input}, context, info) {
            return creategenderHelper(input);
          },
      updateGender(root, {gender_id, input}, context, info) {
            return updateGenderHelper(gender_id, input);
          },
      deleteGender(root, {gender_id}, context, info) {
            return deleteGenderHelper(gender_id);
          },
      createGenre(root, {input}, context, info) {
            return creategenreHelper(input);
          },
      updateGenre(root, {genre_id, input}, context, info) {
            return updateGenreHelper(genre_id, input);
          },
      deleteGenre(root, {genre_id}, context, info) {
            return deleteGenreHelper(genre_id);
          },
      createKeyword(root, {input}, context, info) {
            return createkeywordHelper(input);
          },
      updateKeyword(root, {keyword_id, input}, context, info) {
            return updateKeywordHelper(keyword_id, input);
          },
      deleteKeyword(root, {keyword_id}, context, info) {
            return deleteKeywordHelper(keyword_id);
          },
      createLanguage(root, {input}, context, info) {
            return createlanguageHelper(input);
          },
      updateLanguage(root, {language_id, input}, context, info) {
            return updateLanguageHelper(language_id, input);
          },
      deleteLanguage(root, {language_id}, context, info) {
            return deleteLanguageHelper(language_id);
          },
      createLanguage_role(root, {input}, context, info) {
            return createlanguage_roleHelper(input);
          },
      updateLanguage_role(root, {role_id, input}, context, info) {
            return updateLanguage_roleHelper(role_id, input);
          },
      deleteLanguage_role(root, {role_id}, context, info) {
            return deleteLanguage_roleHelper(role_id);
          },
      createMovie(root, {input}, context, info) {
            return createmovieHelper(input);
          },
      updateMovie(root, {movie_id, input}, context, info) {
            return updateMovieHelper(movie_id, input);
          },
      deleteMovie(root, {movie_id}, context, info) {
            return deleteMovieHelper(movie_id);
          },
      createPerson(root, {input}, context, info) {
            return createpersonHelper(input);
          },
      updatePerson(root, {person_id, input}, context, info) {
            return updatePersonHelper(person_id, input);
          },
      deletePerson(root, {person_id}, context, info) {
            return deletePersonHelper(person_id);
          },
      createProduction_company(root, {input}, context, info) {
            return createproduction_companyHelper(input);
          },
      updateProduction_company(root, {company_id, input}, context, info) {
            return updateProduction_companyHelper(company_id, input);
          },
      deleteProduction_company(root, {company_id}, context, info) {
            return deleteProduction_companyHelper(company_id);
          }
  },
Country: {
          production_countrys(parent) {
                let where = { "country_id": parent.country_id }
                let fields = [ "movie_id","country_id" ]
              return getQueryResult('movies.production_country', fields, where)
          }
  },
Department: {
          movie_crews(parent) {
                let where = { "department_id": parent.department_id }
                let fields = [ "movie_id","person_id","department_id","job" ]
              return getQueryResult('movies.movie_crew', fields, where)
          }
  },
Gender: {
          movie_casts(parent) {
                let where = { "gender_id": parent.gender_id }
                let fields = [ "movie_id","person_id","character_name","gender_id","cast_order" ]
              return getQueryResult('movies.movie_cast', fields, where)
          }
  },
Genre: {
          movie_genress(parent) {
                let where = { "genre_id": parent.genre_id }
                let fields = [ "movie_id","genre_id" ]
              return getQueryResult('movies.movie_genres', fields, where)
          }
  },
Keyword: {
          movie_keywordss(parent) {
                let where = { "keyword_id": parent.keyword_id }
                let fields = [ "movie_id","keyword_id" ]
              return getQueryResult('movies.movie_keywords', fields, where)
          }
  },
Language: {
          movie_languagess(parent) {
                let where = { "language_id": parent.language_id }
                let fields = [ "movie_id","language_id","language_role_id" ]
              return getQueryResult('movies.movie_languages', fields, where)
          }
  },
Movie: {
          movie_casts(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = [ "movie_id","person_id","character_name","gender_id","cast_order" ]
              return getQueryResult('movies.movie_cast', fields, where)
          },
          movie_companys(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = [ "movie_id","company_id" ]
              return getQueryResult('movies.movie_company', fields, where)
          },
          movie_crews(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = [ "movie_id","person_id","department_id","job" ]
              return getQueryResult('movies.movie_crew', fields, where)
          },
          movie_genress(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = [ "movie_id","genre_id" ]
              return getQueryResult('movies.movie_genres', fields, where)
          },
          movie_keywordss(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = [ "movie_id","keyword_id" ]
              return getQueryResult('movies.movie_keywords', fields, where)
          },
          movie_languagess(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = [ "movie_id","language_id","language_role_id" ]
              return getQueryResult('movies.movie_languages', fields, where)
          },
          production_countrys(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = [ "movie_id","country_id" ]
              return getQueryResult('movies.production_country', fields, where)
          }
  },
Person: {
          movie_casts(parent) {
                let where = { "person_id": parent.person_id }
                let fields = [ "movie_id","person_id","character_name","gender_id","cast_order" ]
              return getQueryResult('movies.movie_cast', fields, where)
          },
          movie_crews(parent) {
                let where = { "person_id": parent.person_id }
                let fields = [ "movie_id","person_id","department_id","job" ]
              return getQueryResult('movies.movie_crew', fields, where)
          }
  },
Production_company: {
          movie_companys(parent) {
                let where = { "company_id": parent.company_id }
                let fields = [ "movie_id","company_id" ]
              return getQueryResult('movies.movie_company', fields, where)
          }
  }
  }; 

