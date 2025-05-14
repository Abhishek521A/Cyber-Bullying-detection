
        // Variables of id of country + state + city 
        const country = document.getElementById('country');
        const state = document.getElementById('state');
        const city = document.getElementById('city');


        // Function to remove option if user select another predependency options 
        const removeOption = (selectElement) => {
            let size = selectElement.options.length;
            for (let i = size - 1; i >= 0; i--) {
                selectElement.remove(i);
            }
        }

        // Function to fill state options 
        const selectCountry = () => {
            let optArray = [];
            if (country.value == 'india') {
                optArray = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh (UT)", "Delhi (NCT)", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Ladakh", "Herala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

                optArray.sort();
            }
            else {
                return;
            }

            let newOption = document.createElement("option");
            newOption.value = "";
            newOption.innerHTML = "-- Select State --";
            state.options.add(newOption);
            for (let i = 0; i < optArray.length; i++) {

                newOption = document.createElement("option");
                newOption.value = optArray[i].toLowerCase();
                newOption.innerHTML = optArray[i];
                state.options.add(newOption);
            }
        }

        // Function to fill city options
        const selectState = () => {
            let optArray = [];
            if (state.value == "andhra pradesh") {
                optArray = ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Nellore", "Visakhapatnam", "Vizianagaram", "West Godavari", "Kadapa"];

            }
            else if (state.value == "arunachal pradesh") {
                optArray = ["Anjaw", "Changlang", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Upper Siang", "West Kameng", "West Siang"];


            }
            else if (state.value == "assam") {
                optArray = ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salamara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"];

            }
            else if (state.value == "bihar") {
                optArray = ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "Motihari", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"];
            }
            else if (state.value == "chhattisgarh (ut)") {
                optArray = ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariyaband", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Korea", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"];
            } else if (state.value == "delhi (nct)") {
                optArray = ["Central Delhi", "East Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"]
            }
            else if (state.value == "goa") {
                optArray = ["North Goa", "South Goa"];
            }
            else if (state.value == "gujarat") {
                optArray = ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udepur", "Kachchh", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Surat"];
            }
            else if (state.value == "maharashtra") {
                optArray = ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik"];
            }
            else if (state.value == "madhya pradesh") {
                optArray = ["Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Satna", "Ujjain"];
            }
            else if (state.value == "tamil nadu") {
                optArray = ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"];
            }
            else if (state.value == "karnataka") {
                optArray = ["Bagalkot", "Ballari", "Belagavi", "Bengaluru", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"];
            }
            else if (state.value == "uttar pradesh") {
                optArray = ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur"];
            }
            else if (state.value == "jammu and kashmir") {
                optArray = ["Anantnag", "Bandipore", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama"];
            }
            else if (state.value == "punjab") {
                optArray = ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur"];
            }
            else {
                return;
            }
            optArray.sort();
            removeOption(city);

            let newOption = document.createElement("option");
            newOption.value = "";
            newOption.innerHTML = "-- Select City --";
            city.options.add(newOption);
            for (let i = 0; i < optArray.length; i++) {
                newOption = document.createElement("option");
                newOption.value = optArray[i].toLocaleLowerCase();
                newOption.innerHTML = optArray[i];
                city.options.add(newOption);
            }
        }
        
 
      

// function sub(){
//     let username = document.querySelector('#user-name').value;
//     let father = document.querySelector('#father-name').value;
//     let mother = document.querySelector('#mother-name').value;
//     let gen = document.querySelector('#gen').value;
//     let country = document.querySelector('#country').value;
//     let state = document.querySelector("#state").value;
//     let city=document.querySelector('#city').value;
//     let edu = document.querySelector('#edu').value;
//     let ocp =document.querySelector('#ocupation').value;
//      let inco = document.querySelector('#incomee').value;
//      let rel = document.querySelector('#relation').value;
//      let mob = document.querySelector('#mobile-number').value;
//     let add = document.querySelector("#addhar-number").value;

//     console.log('username', username, 'father name ', father,'mother name' ,mother ,'gender is :',gen,country,state,city,
//     edu,ocp,inco,rel,mob,add)
// };   