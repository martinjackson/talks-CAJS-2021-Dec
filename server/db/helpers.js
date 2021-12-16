
  // Helper functions 


  export async function getAllCountrysHelper() {
    let fields = [ "country_id","country_iso_code","country_name" ]
    let result = await getQueryResult('movies.country', fields, {});
    return result
  }

  export async function getOneCountryHelper(country_id) {
    let fields = [ "country_id","country_iso_code","country_name" ]
    const where = { "country_id": country_id };
    let rows = await getQueryResult('movies.country', fields, where);
    return rows[0];
  }

  export async function createCountryHelper(input) {
    let fields = [ country_id, country_iso_code, country_name ]
    return await execDbCmd("INSERT", "movies.country", fields, input);
  }

  export async function updateCountryHelper(country_id, input) {
      let fields = [ country_id, country_iso_code, country_name ]
      return await execDbCmd("UPDATE", "movies.country", fields, input);
    }

  export async function deleteCountryHelper(country_id, input) {
      let fields = [ country_id, country_iso_code, country_name ]
      return await execDbCmd("DELETE", "movies.country", fields, input);
    }

  export async function getAllDepartmentsHelper() {
    let fields = [ "department_id","department_name" ]
    let result = await getQueryResult('movies.department', fields, {});
    return result
  }

  export async function getOneDepartmentHelper(department_id) {
    let fields = [ "department_id","department_name" ]
    const where = { "department_id": department_id };
    let rows = await getQueryResult('movies.department', fields, where);
    return rows[0];
  }

  export async function createDepartmentHelper(input) {
    let fields = [ department_id, department_name ]
    return await execDbCmd("INSERT", "movies.department", fields, input);
  }

  export async function updateDepartmentHelper(department_id, input) {
      let fields = [ department_id, department_name ]
      return await execDbCmd("UPDATE", "movies.department", fields, input);
    }

  export async function deleteDepartmentHelper(department_id, input) {
      let fields = [ department_id, department_name ]
      return await execDbCmd("DELETE", "movies.department", fields, input);
    }

  export async function getAllGendersHelper() {
    let fields = [ "gender_id","gender" ]
    let result = await getQueryResult('movies.gender', fields, {});
    return result
  }

  export async function getOneGenderHelper(gender_id) {
    let fields = [ "gender_id","gender" ]
    const where = { "gender_id": gender_id };
    let rows = await getQueryResult('movies.gender', fields, where);
    return rows[0];
  }

  export async function createGenderHelper(input) {
    let fields = [ gender_id, gender ]
    return await execDbCmd("INSERT", "movies.gender", fields, input);
  }

  export async function updateGenderHelper(gender_id, input) {
      let fields = [ gender_id, gender ]
      return await execDbCmd("UPDATE", "movies.gender", fields, input);
    }

  export async function deleteGenderHelper(gender_id, input) {
      let fields = [ gender_id, gender ]
      return await execDbCmd("DELETE", "movies.gender", fields, input);
    }

  export async function getAllGenresHelper() {
    let fields = [ "genre_id","genre_name" ]
    let result = await getQueryResult('movies.genre', fields, {});
    return result
  }

  export async function getOneGenreHelper(genre_id) {
    let fields = [ "genre_id","genre_name" ]
    const where = { "genre_id": genre_id };
    let rows = await getQueryResult('movies.genre', fields, where);
    return rows[0];
  }

  export async function createGenreHelper(input) {
    let fields = [ genre_id, genre_name ]
    return await execDbCmd("INSERT", "movies.genre", fields, input);
  }

  export async function updateGenreHelper(genre_id, input) {
      let fields = [ genre_id, genre_name ]
      return await execDbCmd("UPDATE", "movies.genre", fields, input);
    }

  export async function deleteGenreHelper(genre_id, input) {
      let fields = [ genre_id, genre_name ]
      return await execDbCmd("DELETE", "movies.genre", fields, input);
    }

  export async function getAllKeywordsHelper() {
    let fields = [ "keyword_id","keyword_name" ]
    let result = await getQueryResult('movies.keyword', fields, {});
    return result
  }

  export async function getOneKeywordHelper(keyword_id) {
    let fields = [ "keyword_id","keyword_name" ]
    const where = { "keyword_id": keyword_id };
    let rows = await getQueryResult('movies.keyword', fields, where);
    return rows[0];
  }

  export async function createKeywordHelper(input) {
    let fields = [ keyword_id, keyword_name ]
    return await execDbCmd("INSERT", "movies.keyword", fields, input);
  }

  export async function updateKeywordHelper(keyword_id, input) {
      let fields = [ keyword_id, keyword_name ]
      return await execDbCmd("UPDATE", "movies.keyword", fields, input);
    }

  export async function deleteKeywordHelper(keyword_id, input) {
      let fields = [ keyword_id, keyword_name ]
      return await execDbCmd("DELETE", "movies.keyword", fields, input);
    }

  export async function getAllLanguagesHelper() {
    let fields = [ "language_id","language_code","language_name" ]
    let result = await getQueryResult('movies.language', fields, {});
    return result
  }

  export async function getOneLanguageHelper(language_id) {
    let fields = [ "language_id","language_code","language_name" ]
    const where = { "language_id": language_id };
    let rows = await getQueryResult('movies.language', fields, where);
    return rows[0];
  }

  export async function createLanguageHelper(input) {
    let fields = [ language_id, language_code, language_name ]
    return await execDbCmd("INSERT", "movies.language", fields, input);
  }

  export async function updateLanguageHelper(language_id, input) {
      let fields = [ language_id, language_code, language_name ]
      return await execDbCmd("UPDATE", "movies.language", fields, input);
    }

  export async function deleteLanguageHelper(language_id, input) {
      let fields = [ language_id, language_code, language_name ]
      return await execDbCmd("DELETE", "movies.language", fields, input);
    }

  export async function getAllLanguage_rolesHelper() {
    let fields = [ "role_id","language_role" ]
    let result = await getQueryResult('movies.language_role', fields, {});
    return result
  }

  export async function getOneLanguage_roleHelper(role_id) {
    let fields = [ "role_id","language_role" ]
    const where = { "role_id": role_id };
    let rows = await getQueryResult('movies.language_role', fields, where);
    return rows[0];
  }

  export async function createLanguage_roleHelper(input) {
    let fields = [ role_id, language_role ]
    return await execDbCmd("INSERT", "movies.language_role", fields, input);
  }

  export async function updateLanguage_roleHelper(role_id, input) {
      let fields = [ role_id, language_role ]
      return await execDbCmd("UPDATE", "movies.language_role", fields, input);
    }

  export async function deleteLanguage_roleHelper(role_id, input) {
      let fields = [ role_id, language_role ]
      return await execDbCmd("DELETE", "movies.language_role", fields, input);
    }

  export async function getAllMoviesHelper() {
    let fields = [ "movie_id","title","budget","homepage","overview","popularity","release_date","revenue","runtime","movie_status","tagline","vote_average","vote_count" ]
    let result = await getQueryResult('movies.movie', fields, {});
    return result
  }

  export async function getOneMovieHelper(movie_id) {
    let fields = [ "movie_id","title","budget","homepage","overview","popularity","release_date","revenue","runtime","movie_status","tagline","vote_average","vote_count" ]
    const where = { "movie_id": movie_id };
    let rows = await getQueryResult('movies.movie', fields, where);
    return rows[0];
  }

  export async function createMovieHelper(input) {
    let fields = [ movie_id, title, budget, homepage, overview, popularity, release_date, revenue, runtime, movie_status, tagline, vote_average, vote_count ]
    return await execDbCmd("INSERT", "movies.movie", fields, input);
  }

  export async function updateMovieHelper(movie_id, input) {
      let fields = [ movie_id, title, budget, homepage, overview, popularity, release_date, revenue, runtime, movie_status, tagline, vote_average, vote_count ]
      return await execDbCmd("UPDATE", "movies.movie", fields, input);
    }

  export async function deleteMovieHelper(movie_id, input) {
      let fields = [ movie_id, title, budget, homepage, overview, popularity, release_date, revenue, runtime, movie_status, tagline, vote_average, vote_count ]
      return await execDbCmd("DELETE", "movies.movie", fields, input);
    }

  export async function getAllPersonsHelper() {
    let fields = [ "person_id","person_name" ]
    let result = await getQueryResult('movies.person', fields, {});
    return result
  }

  export async function getOnePersonHelper(person_id) {
    let fields = [ "person_id","person_name" ]
    const where = { "person_id": person_id };
    let rows = await getQueryResult('movies.person', fields, where);
    return rows[0];
  }

  export async function createPersonHelper(input) {
    let fields = [ person_id, person_name ]
    return await execDbCmd("INSERT", "movies.person", fields, input);
  }

  export async function updatePersonHelper(person_id, input) {
      let fields = [ person_id, person_name ]
      return await execDbCmd("UPDATE", "movies.person", fields, input);
    }

  export async function deletePersonHelper(person_id, input) {
      let fields = [ person_id, person_name ]
      return await execDbCmd("DELETE", "movies.person", fields, input);
    }

  export async function getAllProduction_companysHelper() {
    let fields = [ "company_id","company_name" ]
    let result = await getQueryResult('movies.production_company', fields, {});
    return result
  }

  export async function getOneProduction_companyHelper(company_id) {
    let fields = [ "company_id","company_name" ]
    const where = { "company_id": company_id };
    let rows = await getQueryResult('movies.production_company', fields, where);
    return rows[0];
  }

  export async function createProduction_companyHelper(input) {
    let fields = [ company_id, company_name ]
    return await execDbCmd("INSERT", "movies.production_company", fields, input);
  }

  export async function updateProduction_companyHelper(company_id, input) {
      let fields = [ company_id, company_name ]
      return await execDbCmd("UPDATE", "movies.production_company", fields, input);
    }

  export async function deleteProduction_companyHelper(company_id, input) {
      let fields = [ company_id, company_name ]
      return await execDbCmd("DELETE", "movies.production_company", fields, input);
    }