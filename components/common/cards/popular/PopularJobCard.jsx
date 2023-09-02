import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'


const sampleData = {
  job_id: 1,
  employer_logo: 'https://www.pngwing.com/en/free-png-spjgq', // Replace with a valid image URL
  employer_name: 'Sample Company',
  job_title: 'Sample Job Title',
};

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {


  const dataToRender = sampleData;

  return (
    <TouchableOpacity
      key={dataToRender.job_id}
      style={styles.container(selectedJob, dataToRender)}
      onPress={() => handleCardPress(dataToRender)}
    >
       <TouchableOpacity style={styles.logoContainer(selectedJob, dataToRender)}>
        <Image
          source={{ uri: dataToRender.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage} />


      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{dataToRender.employer_name}</Text> 

      <Text style={styles.jobName(selectedJob, dataToRender)} numberOfLines={1}>
        {dataToRender.job_title}
      </Text>



    </TouchableOpacity>
  )
}




export default PopularJobCard